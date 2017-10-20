import random

import urllib,json
def getWordList(allQuestions, numQuestions):
	# 0. Get all the hints and answers separated
	random.shuffle(allQuestions)
	choosen = allQuestions[:(numQuestions+1)]
	allWords = []
	for ques in choosen:
		random.shuffle(ques)
		word = [ques[0][1], ques[0][0]]
		allWords.append(word)
	wordList = tuple(allWords)
	
	return wordList

def getGifUrl(term):
	API_KEY = "5C1tfIyJzJ202BzSuISTA196Q5t1DXCL"
	data = json.loads(urllib.urlopen("http://api.giphy.com/v1/gifs/search?q="+
	term+ "&api_key=" + API_KEY+ "&limit=1").read())
	json_data = json.dumps(data)
	giphy_url = data['data'][0]['embed_url']
	return giphy_url

def getJson(allWords):
	data = []
	for i in range(len(allWords)):
		data.append({
			answer: allWords[i][0],
			clue: allWords[i][1],
			imageUrl: getGifUrl(allWords[i][0])
			})
	with open('data.txt', 'w') as outfile:
    	json.dump(data, outfile)


