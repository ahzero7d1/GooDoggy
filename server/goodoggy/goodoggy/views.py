from __future__ import print_function

#import os.path
import os
import requests
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from django.shortcuts import render
from .models import Email
from django.contrib.auth.decorators import login_required
from decouple import config
from django.http import JsonResponse
from decouple import config
import requests
import os

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://mail.google.com/',
          'https://www.googleapis.com/auth/gmail.addons.current.action.compose',
          'https://www.googleapis.com/auth/gmail.addons.current.message.action',
          'https://www.googleapis.com/auth/gmail.addons.current.message.metadata',
          'https://www.googleapis.com/auth/gmail.addons.current.message.readonly',
          'https://www.googleapis.com/auth/gmail.compose',
          'https://www.googleapis.com/auth/gmail.insert',
          'https://www.googleapis.com/auth/gmail.labels',
          'https://www.googleapis.com/auth/gmail.metadata',
          'https://www.googleapis.com/auth/gmail.modify',
          'https://www.googleapis.com/auth/gmail.readonly',
          'https://www.googleapis.com/auth/gmail.send',
          'https://www.googleapis.com/auth/gmail.settings.basic',
          'https://www.googleapis.com/auth/gmail.settings.sharing',
          'https://www.googleapis.com/auth/gmail.modify'
          ]


def gmail_quickstart(request):
    """Shows basic usage of the Gmail API.
    Lists the user's Gmail labels.
    """
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES, redirect_uri='http://localhost:8080/')
            creds = flow.run_local_server(port=8080)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())

    try:
        # Call the Gmail API
        service = build('gmail', 'v1', credentials=creds)
        results = service.users().labels().list(userId='me').execute()
        labels = results.get('labels', [])

        if not labels:
            print('No labels found.')
            return
        print('Labels:')
        for label in labels:
            print(label['name'])

    except HttpError as error:
        # TODO(developer) - Handle errors from gmail API.
        print(f'An error occurred: {error}')
        
    return render(request, 'read.html')
    #return render(request, 'read.html', {'message': message})

def get_gmail_service(credentials):
    service = build('gmail', 'v1', credentials=credentials)
    return service

def get_user_credentials(request):
    api_key = config('GOOGLE_API_KEY')
    client_id = config('GOOGLE_CLIENT_ID')
    client_secret = config('GOOGLE_CLIENT_SECRET')
    refresh_token = config('GOOGLE_REFRESH_TOKEN')

    credentials_info = {
        "client_id": client_id,
        "client_secret": client_secret,
        "refresh_token": refresh_token,
        "token_uri": "https://accounts.google.com/o/oauth2/token"
    }
    
    return Credentials.from_authorized_user_info(credentials_info)


    # api_key를 딕셔너리 형태로 변환하여 credentials 생성
    credentials_info = {"token": api_key}
    return Credentials.from_authorized_user_info(credentials_info)

def get_user_email(service):
    profile = service.users().getProfile(userId='me').execute()
    return profile['emailAddress']

def get_emails_by_sender(service, user_email):
    emails_by_sender = {}
    
    emails = service.users().messages().list(userId='me').execute()
    
    for email_data in emails.get('messages', []):
        email = service.users().messages().get(userId='me', id=email_data['id']).execute()
        sender = ""
        for header in email['payload']['headers']:
            if header['name'] == 'From':
                sender = header['value']
                break
        if sender not in emails_by_sender:
            emails_by_sender[sender] = []
        emails_by_sender[sender].append(email)
    
    return emails_by_sender

def email_list(request):
    user_credentials = get_user_credentials(request)  # 구글 소셜 로그인을 통한 사용자 인증
    service = get_gmail_service(user_credentials)
    
    user_email = get_user_email(service)  # 사용자의 이메일 주소 가져오기
    emails = get_emails_by_sender(service, user_email)  # 발신자별로 메일 데이터 가져오기
    
    context = {'user_email': user_email, 'emails': emails}
    return render(request, 'email_list.html', context)

def check_domain_safety(domain):
    api_key = config('GOOGLE_API_KEY')
    url = f"https://safebrowsing.googleapis.com/v4/threatMatches:find?key={api_key}"

    payload = {
        "client": {
            "clientId": "your-app-name",
            "clientVersion": "1.0.0"
        },
        "threatInfo": {
            "threatTypes": ["MALWARE", "SOCIAL_ENGINEERING"],
            "platformTypes": ["ANY_PLATFORM"],
            "threatEntryTypes": ["URL"],
            "threatEntries": [{"url": domain}]
        }
    }

    response = requests.post(url, json=payload)
    data = response.json()

    if "matches" in data and data["matches"]:
        return True
    else:
        return False

def check_domain_safety_view(request):
    domain_to_check = "example.com"
    is_malicious = check_domain_safety(domain_to_check)
    if is_malicious:
        result = f"The domain {domain_to_check} is malicious."
    else:
        result = f"The domain {domain_to_check} is safe."
    
    return JsonResponse({'result': result})


if __name__ == '__main__':
    #gmail_quickstart()
    api_key = config('GOOGLE_API_KEY')
    if not api_key:
        print("API key not provided.")
    else:
        domain_to_check = "example.com"
        is_malicious = check_domain_safety(api_key, domain_to_check)
        if is_malicious:
            print(f"The domain {domain_to_check} is malicious.")
        else:
            print(f"The domain {domain_to_check} is safe.")


def profile(request):
    # 프로필 페이지에 대한 처리를 여기에 작성
    return render(request, 'profile.html')