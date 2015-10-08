function CaesarDecrypt(shift, lowerCaseText)
{
lowerCaseText = lowerCaseText.toLowerCase();
var result = "";
//var shift = 3;
var min = "a".charCodeAt();
var max = "z".charCodeAt();
for(var i = 0; i < lowerCaseText.length; i++)
{
	var letter = lowerCaseText.slice(i,i+1);
	if(letter.charCodeAt() >= min && letter.charCodeAt() <= max) // if it's a letter
	{
		var charCode = letter.charCodeAt() - min;
		var oLeterCode = (charCode + shift) % 26;
		if(oLeterCode >= 0)
		{
			result += String.fromCharCode(oLeterCode + min);
		}
		else
		{
			result += String.fromCharCode(26 + oLeterCode + min);
		}
	}
	else
	{
		result += letter;
	}
}
return result;
}
for(var i = -26; i < 27 ; ++i )
{
	var res = CaesarDecrypt(i,document.getElementsByTagName("pre")[0].innerText);
	if(confirm(res))
	{
		document.getElementsByTagName("pre")[0].innerText = res;
	}
	else
	{
		break;
	}
}
