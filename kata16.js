//Case Maker II - Convert strings into different styles (camel, pascal, snake, kebab)

//1. camel, pascal, snake, kebab, title
//2. vowel, consonant
//3. upper, lower

//Pascal - "PascalCase"
//Snake - "the_quick_brown_fox_jumps_over_the_lazy_dog"
//Kebab - "kebab-case"
//Title - Capitalize all words

const makeCase = function(input,
  cases) {

  let text = input;

  if (typeof(
      cases) === "string") {
    if (
      cases === "camel") {
      text = text[0].toLowerCase() + text.substring(1);
      for (let i = 1; i < input.length; i++) {
        if (text[i] === " ") {
          text = text.substring(0, i) + text.substring(i + 1, i + 2).toUpperCase() + text.substring(i + 2);
        }
      }
    } else if (
      cases === "pascal") {
      text = text[0].toUpperCase() + text.substring(1);
      for (let i = 1; i < input.length; i++) {
        if (text[i] === " ") {
          text = text.substring(0, i) + text.substring(i + 1, i + 2).toUpperCase() + text.substring(i + 2);
        }
      }
    } else if (
      cases === "snake") {
      text = text.toLowerCase();
      for (let i = 0; i < input.length; i++) {
        if (text[i] === " ") {
          text = text.substring(0, i) + "_" + text.substring(i + 1);
        }
      }
    } else if (
      cases === "kebab") {
      text = text.toLowerCase();
      for (let i = 0; i < input.length; i++) {
        if (text[i] === " ") {
          text = text.substring(0, i) + "-" + text.substring(i + 1);
        }
      }
    } else if (
      cases === "title") {
      text = text[0].toUpperCase() + text.substring(1);
      for (let i = 1; i < input.length; i++) {
        if (text[i] === " ") {
          text = text.substring(0, i) + " " + text.substring(i + 1, i + 2).toUpperCase() + text.substring(i + 2);
        }
      }
    } else if (
      cases === "vowel") {
      for (let i = 0; i < input.length; i++) {
        if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
          text = text.substring(0, i) + text[i].toUpperCase() + text.substring(i + 1);
        }
      }
    } else if (
      cases === "consonant") {
      for (let i = 0; i < input.length; i++) {
        if (text[i] != "a" && text[i] != "e" && text[i] != "i" && text[i] != "o" && text[i] != "u") {
          text = text.substring(0, i) + text[i].toUpperCase() + text.substring(i + 1);
        }
      }
    } else if (
      cases === "upper") {
      text = text.toUpperCase();
    } else if (
      cases === "lower") {
      text = text.toLowerCase();
    }
  } else if (typeof(
      cases) === "object") {
    for (let i = 0; i <
      cases.length; i++) {
      if (
        cases[i] === "camel" ||
        cases[i] === "pascal" ||
        cases[i] === "snake" ||
        cases[i] === "kebab" ||
        cases[i] === "title") {
        if (
          cases[i] === "camel") {
          text = text[0].toLowerCase() + text.substring(1);
          for (let i = 1; i < input.length; i++) {
            if (text[i] === " ") {
              text = text.substring(0, i) + text.substring(i + 1, i + 2).toUpperCase() + text.substirng(i + 2);
            }
          }
        } else if (
          cases[i] === "pascal") {
          text = text[0].toUpperCase() + text.substring(1);
          for (let i = 1; i < input.length; i++) {
            if (text[i] === " ") {
              text = text.substring(0, i) + text.substring(i + 1, i + 2).toUpperCase() + text.substirng(i + 2);
            }
          }
        } else if (
          cases[i] === "snake") {
          text = text.toLowerCase();
          for (let i = 0; i < input.length; i++) {
            if (text[i] === " ") {
              text = text.substring(0, i) + "_" + text.substring(i + 1);
            }
          }
        } else if (
          cases[i] === "kebab") {
          text = text.toLowerCase();
          for (let i = 0; i < input.length; i++) {
            if (text[i] === " ") {
              text = text.substring(0, i) + "-" + text.substring(i + 1);
            }
          }
        } else if (
          cases[i] === "title") {
          text = text[0].toUpperCase() + text.substring(1);
          for (let i = 1; i < input.length; i++) {
            if (text[i] === " ") {
              text = text.substring(0, i) + " " + text.substring(i + 1, i + 2).toUpperCase() + text.substring(i + 2);
            }
          }
        }
      }
    }
    for (let i = 0; i <
      cases.length; i++) {
      if (
        cases[i] === "vowel") {
        for (let i = 0; i < input.length; i++) {
          if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
            text = text.substring(0, i) + text[i].toUpperCase() + text.substring(i + 1);
          }
        }
      } else if (
        cases[i] === "consonant") {
        for (let i = 0; i < input.length; i++) {
          if (text[i] != "a" && text[i] != "e" && text[i] != "i" && text[i] != "o" && text[i] != "u") {
            text = text.substring(0, i) + text[i].toUpperCase() + text.substring(i + 1);
          }
        }
      }
    }
    for (let i = 0; i <
      cases.length; i++) {
      if (
        cases[i] === "upper") {
        text = text.toUpperCase();
      } else if (
        cases[i] === "lower") {
        text = text.toLowerCase();
      }
    }
  }
  return text;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
