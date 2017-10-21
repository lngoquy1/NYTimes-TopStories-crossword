import random

import urllib,json
import numbers
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
			"answer": allWords[i][0],
			"clue": allWords[i][1],
			"imageUrl": getGifUrl(allWords[i][0])
			})
	with open('data.txt', 'w') as outfile:
    		json.dump(data, outfile)
def generateHTML(size, grid):
	print("Check grid size %d by %d" %(len(grid), len(grid[0])))
	lines = []
	refs = []
	lines.append("<table className='puzzle'>\n")
	for i in range(size):
		lines.append("<tr className='row"+str(i)+"'>\n")

		for j in range(size):
			if grid[i][j] == '-':	
				lines.append("<td className='cell cell"+str(j)+"' style={tdStyles}></td>\n")
			elif grid[i][j] != ' ': # contain question number
				answer_num = getPosition(i, j)
				lines.append("<td className='cell cell"+str(j)+"'><input type='text' ref='answer"+answer_num+"' placeholder='"+str(grid[i][j])+"' maxLength='1' onChange={this.handleChange} /></td>\n")
				refs.append("answer"+answer_num+": ReactDOM.findDOMNode(this.refs.answer"+answer_num+").value,\n")
			else: # to fill in letters
				answer_num = getPosition(i, j)
				lines.append("<td className='cell cell"+str(j)+"'><input type='text' ref='answer"+answer_num+"' maxLength='1' onChange={this.handleChange}/></td>\n")
				refs.append("answer"+answer_num+": ReactDOM.findDOMNode(this.refs.answer"+answer_num+").value,\n")
		lines.append("</tr>\n")
	lines.append("</table>")
	refs[-1]= ''.join(list(refs[-1])[:-2])
	tab_file = open("table.txt", "w")
	tab_file.writelines(lines)
	tab_file.close()
	ref_file = open("ref.txt", "w")
	ref_file.writelines(refs)
	ref_file.close()



def getPosition(row, col):
	if row < 10:
		row = "0"+str(row)
	if col < 10:
		col = "0"+str(col)
	return str(row)+str(col)


