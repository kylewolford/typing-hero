
var curString;

// Wikimedia top 400 most commonly used words
var wordList = ["the", "of", "and", "to", "in", "I", "that", "was", "he", "his", "it", "with", "is", "for", "as", "had", "you", "not", "be", "on", "at", "her", "by", "which", "have", "or", "from", "this", "him", "but", "all", "she", "wee", "they", "my", "are", "me", "so", "one", "their", "de", "an", "said", "we", "them", "who", "would", "been", "will", "no", "when", "there", "if", "more", "out", "up", "any", "into", "do", "your", "has", "man", "what", "could", "other", "our", "than", "some", "very", "time", "about", "upon", "may", "la", "its", "only", "now", "little", "like", "then", "can", "made", "should", "did", "us", "such", "a", "great", "before", "must", "these", "two", "see", "over", "know", "much", "et", "after", "first", "Mr", "down", "good", "men", "own", "most", "never", "where", "old", "day", "work", "those", "come", "shall", "himself", "came", "way", "without", "life", "make", "go", "long", "being", "well", "through", "might", "say", "am", "en", "too", "many", "even", "again", "back", "here", "people", "think", "every", "same", "under", "last", "went", "thought", "les", "found", "take", "still", "hand", "place", "also", "while", "just", "def", "against", "die", "though", "young", "years", "get", "ever", "things", "give", "part", "nothing", "face", "off", "right", "left", "once", "another", "god", "world", "house", "saw", "three", "new", "always", "took", "put", "head", "love", "each", "mrs", "night", "between", "son", "few", "because", "mind", "tell", "whom", "thing", "heart", "far", "lord", "seemed", "set", "whole", "days", "got", "country", "both", "find", "done", "name", "told", "look", "having", "heard", "seen", "let", "going", "better", "home", "moment", "knew", "side", "something", "course", "among", "full", "enough", "woman", "father", "soon", "words", "gave", "end", "Gutenberg", "almost", "cannot", "small", "er", "door", "room", "water", "want", "however", "brought", "given", "word", "whose", "use", "nor", "quite", "light", "best", "does", "morning", "till", "myself", "since", "present", "turned", "used", "themselves", "rather", "until", "power", "others", "felt", "thou", "money", "mother", "began", "less", "war", "next", "den", "within", "form", "large", "poor", "certain", "death", "year", "y", "together", "matter", "kind", "stood", "order", "often", "sent", "half", "herself", "friend", "wife", "anything", "keep", "true", "means", "hundred", "round", "point", "state", "thy", "received", "white", "believe", "passed", "person", "read", "feet", "case", "pour", "city", "thus", "2", "children", "alone", "above", "fact", "high", "already", "dear", "known", "met", "english", "says", "gone", "times", "girl", "least", "perhaps", "land", "hope", "nature", "return", "letter", "open", "along", "air", "sure", "indeed", "number", "leave", "four", "body", "women", "either", "thee", "free", "help", "wish", "business", "during", "general", "several", "therefore", "hour", "lay", "held", "friends", "second", "fire", "speak", "whether", "reason", "john", "thousand", "manner", "cried", "king", "forth", "become", "England", "question", "call", "terms", "became", "replied", "lost", "why", "behind", "family", "dead", "possible", "following", "law", "feel", "electronic", "cause", "boy", "care", "different", "plus", "looking", "ground", "rest", "making", "soul", "really", "town", "mean", "human", "truth", "short", "kept", "subject", "french"];

var numWords = wordList.length;
        
var difficulty = 0; // 0 - easy, 1 - medium, 2 - hard
        
var totalXp = [300, 700, 1000]; // max xp per sentence for each level
        
var xpReward = -1;

var sentence = "";

// Modified from StackOverflow
function capitalizeWord(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}
        
function makeSentence() {
    switch (difficulty) {
        case 0:
            makeEasySentence();
            break;
        case 1:
            makeNormalSentence();
            break;
        case 2:
            makeHardSentence();
            break;
        default:
            alert("invalid difficulty");
            break;
    }
    // Applicable to all sentences
    xpReward = totalXp[difficulty];
    document.getElementById("curReward").innerHTML = totalXp[difficulty];
    
}

function getWord() {
    var wordIndex = Math.floor(Math.random() * numWords);
    return wordList[wordIndex];
}
    
// Generates sentences between 5 and 10 words
function makeEasySentence() {
    var minWords = 5;
    var maxWords = 10;
    var sentence = "";
    var sentenceWords = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords - 1;
    sentence = capitalizeWord(getWord()) + " ";
    for (var i=0; i<sentenceWords; i++) {
        sentence = sentence + getWord() + " ";
    }
    sentence = sentence + getWord() + ".";
    console.log("Sentence is : " + sentence);
    document.getElementById("curSentence").innerHTML = sentence;
}
        
// Generates sentences between 10 and 15 words, with random punctuation between words
function makeNormalSentence() {
    var possSpaces = [" ", " ", " ", " ", " ", " ", " ", ", ", ": ", "; ", ". ", "! ", "? "];
    var minWords = 10;
    var maxWords = 15;
    var sentence = "";
    var sentenceWords = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords - 1;
    sentence = capitalizeWord(getWord()) + possSpaces[Math.floor(Math.random()*possSpaces.length)];
    for (var i=0; i<sentenceWords; i++) {
        sentence = sentence + getWord() + possSpaces[Math.floor(Math.random()*possSpaces.length)];
    }
    sentence = sentence + getWord() + "."
    document.getElementById("curSentence").innerHTML = sentence;
}
        
// Generates random string between 20 and 30 characters
function makeHardSentence() {
    var minChars = 20;
    var maxChars = 30;
    var sentence = "";
    var sentenceChars = Math.floor(Math.random() * (maxChars - minChars + 1)) + minChars - 1;
    
    // each of these adds up to 13 chars
    while (sentence.length + 12 < sentenceChars) {
        sentence = sentence + Math.random().toString(36);
    }
    sentence = sentence + Math.random().toString(36).substring(sentenceChars-sentence.length);
    document.getElementById("curSentence").innerHTML = sentence;
}
        
        
function checkPress(press, curString) {
    
            
    if (press == curString[0]) {
        curString = curString.substr(1);
        document.getElementById("curSentence").innerHTML = curString;
    }
    else {
        if (xpReward > 0.5*totalXp[difficulty]) { // prevent xp reward from going below 50%
            xpReward -= 0.02*totalXp[difficulty];
            document.getElementById("curReward").innerHTML = xpReward;
        }
    }
    if (curString.length < 1) {
        if (xpToNext <= xpReward) {
            if (curLevel < 151) {
                alert("Level up! You are now level " + Number(curLevel+1) + "!");
            }
            else {
                alert("You have reached the level cap. You cannot earn any more xp on this account.");
            }
        }
        mainApp.giveXp(xpReward);
        makeSentence();
        updateDisplays();
            
    }
}
        
function changeDifficulty(newDiff) {
    difficulty = newDiff;
    makeSentence();
}
        
// modified from StackOverflow
document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    theSentence = document.getElementById("curSentence").innerHTML;
    
    checkPress(charStr, theSentence);
};
        
function updateDisplaysGame() {
    document.getElementById("xpCounter").innerHTML = curUser.xp;
    document.getElementById("introHeadingMain").innerHTML = "Welcome back, " + curUser.username + "!";
    document.getElementById("levelCounter").innerHTML = curLevel;
    document.getElementById("xpToNextCounter").innerHTML = xpToNext;
}

function initialSetupGame() {
    if (uid !== null) {
        makeSentence();
        mainApp.copyToLocal();
        if (curUser.xp == 0) {
            // go to tutorial
            window.location.replace("tutorial.html");
        }
        document.getElementById("theGame").style.visibility = "visible";
        document.getElementById("theGameLoader").style.display = "none";

    }
    
}
