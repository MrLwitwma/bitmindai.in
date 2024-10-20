const more = document.getElementById('more');
const popup = document.getElementById('popup')
const more_popup = document.getElementById('more-popup')

more.addEventListener('click', () =>{
    more_popup.style.display = 'block';
    popup.style.display = 'flex';
});

more_popup.addEventListener('click', () =>{
    more_popup.style.display = 'none';
    popup.style.display = 'none';
})




document.getElementById('apiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const allowSite = document.getElementById('allowSite').checked;
    const webaddress = document.getElementById('webaddress').value;
    const timeout = document.getElementById('timeout').value;

    if (allowSite == true && webaddress == ''){
        return window.alert('Fill the webaddress first!')
    }

    const data = {
        username,
        allowSite,
        webaddress,
        timeout
    };

    fetch('https://deepspaceai.pythonanywhere.com/generate_api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        const apiKey = json.api_key; // Assume this is a 16-digit API key
        document.getElementById('apiKeyPreview').innerText = 'API Key: ' + apiKey.slice(0, 8) + '********';
        document.getElementById('apiDisplay').style.display = 'block';

        document.getElementById('showFullKey').onclick = function() {
            document.getElementById('apiKeyPreview').innerText = 'API Key: ' + apiKey;
        };

        document.getElementById('copyKey').onclick = function() {
            navigator.clipboard.writeText(apiKey).then(() => {
                alert('API Key copied to clipboard');
            });
        };
    })
    .catch(error => {
        console.error('Error:', error);
    });
});





const js = `
fetch('https://deepspaceai.pythonanywhere.com/get_response', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: username,
        api_key: apiKey,
        prompt: user_prompt,
    })
})
.then(response => response.json())
.then(data => {
    if (data.message) {
        console.log(data.message);
    } else if (data.error) {
        cnosole.log(data.error);
    }
})
.catch(error => {
    console.error('Error:', error);
});
`

const py = `
import requests
import json

# Replace these with actual values
url = 'https://deepspaceai.pythonanywhere.com/get_response'
username = 'your_username'
api_key = 'your_api_key'
user_prompt = 'your_prompt'

# Headers and body
headers = {
    'Content-Type': 'application/json'
}
body = {
    'username': username,
    'api_key': api_key,
    'prompt': user_prompt
}

# Send POST request
response = requests.post(url, headers=headers, data=json.dumps(body))

# Handle response
if response.status_code == 200:
    data = response.json()
    if 'message' in data:
        print(data['message'])
    elif 'error' in data:
        print(data['error'])
else:
    print(f"Error: {response.status_code}")
`














document.getElementById('js').addEventListener('click', function() {
    toggleCodeBox(js);
});

document.getElementById('py').addEventListener('click', function() {
    toggleCodeBox(py);
});

function toggleCodeBox(content) {
    const codeBox = document.getElementById('codeBox');
    const codeContent = document.getElementById('codeContent');
    if (codeBox.style.display === 'none') {
        codeContent.innerText = content;
        codeBox.style.display = 'block';
    } else {
        codeBox.style.display = 'none';
    }
}
