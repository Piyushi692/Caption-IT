# Caption IT: Beautiful captions Suggestions by AI:sparkles:
Sucked :unamused: by searching some nice captions for your post online. Bored of posting random captions with your images.

Use caption IT to suggest some captions from the internet that are suitable to your image through AI. 

You can also get your captions based on your given keywords.


## How It Works
The algorithm uses machine learning and natural language processing to process. It all works in three major steps:
- It extract all the objects from the image (eg. flower, sun). 
- It uses natural language processing to find synonyms of all the objects detected in the image.
- Then it use an external api to fetch quotes related to all the words.   

## Technology Used
- **FrontEnd** : React, ReactRouter, Sass
- **Backend API**: Flask
- **Object Detection**: TinyYoloV4 with ImageAI
- **NLP**: NLTK
- **Quotes Api**: [Quotable.io](https://github.com/lukePeavey/quotable)


## Run Locally

Clone the project

```bash
  git clone https://github.com/piyushi2227/Caption-IT
```

Go to the project directory

```bash
  cd rock-paper-scissors-online
```
Go to backend and install dependencies 

```bash
cd Backend
pip install -r requirements.txt
```
Start the server
```bash
python server.py
```
Install frontend dependencies

```bash
  cd ..
  cd Frontend
  npm install
```

Start the Frontend server

```bash
npm run start
```

## Future Scope
- The application is slow as it does many high performance things at the same time and due to that it does effect the user experience.
- The object detection might be replaced or kept with image captioning to extract keywords from image.


## Author

- [@piyushi2227](https://github.com/piyushi2227)


## Feedback

For feedback, email patidarpiyushi@gmail.com.
