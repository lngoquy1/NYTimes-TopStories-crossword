import nltk
import string
import random
import time

import glob, os


import urllib,json
from crossword import getWordList, getJson, generateHTML
from puzzlemaker import Crossword, Word

def main(): 
	allAbstract = []
	for file in glob.glob("*.json"):
	   abstract = []
	   with open(file) as data_file:
	       data = json.load(data_file)
	       data = data["Title and abstract"]
	       for i in range(len(data)):
	           line = data[i]["abstract"]
	           line = line.encode('ascii', errors='ignore')
	           line.decode("utf-8")
	           abstract.append(line)
	   allAbstract.extend(abstract)
	print(len(allAbstract))
        allQuestions = []
       
    
       
	for i in range(len(allAbstract)):
           ques = question_gen(allAbstract[i])
	   if ques != None:
	       allQuestions.append(ques)
	size = 13
    	wordList = getWordList(allQuestions,10)
	getJson(wordList)
    	crossWord = Crossword(size, size, "-", 5000, wordList)
	
    	crossWord.compute_crossword(2)
    	# print crossWord.word_bank()
    	print crossWord.solution()
    	# print crossWord.word_find()
    	# print crossWord.grid

	gameGrid = crossWord.display()

	generateHTML(size, gameGrid)

    	print crossWord.legend()
    	print len(crossWord.current_word_list), "out of", len(wordList)
    	# print crossWord.debug

     
def question_gen(sentence):
   tokens = nltk.word_tokenize(sentence)
   #print(tokens)
   postag = nltk.pos_tag(tokens)
   #print(postag)
   answers = [[x[0]] for x in postag if x[1] == 'NNP']
   #print(answers)

   gen_ques = []
   banned_words = ['is', 'and', "'s"]
   ttk = zip(*postag)
   ttk1 = list(ttk[0])
   pt1 = list(ttk[1])
   #print(ttk1,pt1)
   questions1 = []
   if(not answers):
       return
   for a in answers:
       cttk = ttk1[:]
       for i in range(len(ttk1)):
           if a[0] == ttk1[i]:
               ans = ttk1[i]
               cttk[i] = "_"*len(ans)
               questions1.append((cttk, ans))
   allQues = []
   allAns = []
   for i in questions1:
       ques = " ".join(i[0])
       term = i[1]  # replace term with the keyword
       allQues.append(ques)
       allAns.append(ans)


      
   return zip(allQues, allAns)

if __name__=="__main__":
	main()