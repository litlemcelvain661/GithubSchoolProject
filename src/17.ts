function findUniqueChars(str: string): [number, number] {
  const charCount = {};
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === undefined) {
      charCount[str[i]] = 1;
    } else {
      charCount[str[i]]++;
    }
    maxLength = Math.max(maxLength, i + 1);
  }

  let uniqueChars: [number, number] = [maxLength - 1, maxLength];
  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      uniqueChars[0] = 0;
    }
  }

  return uniqueChars;
}

function isPalindrome(str: string): boolean {
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < rightIndex) {
    if (str[leftIndex] !== str[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
}

function findMaxStringLength(strs: string[]): number {
  let maxLength = 0;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] && str.length > maxLength) {
      maxLength = strs[i].length;
    }
  }

  return maxLength;
}

function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }

  return result;
}

function findCharIndex(str: string, char: string): number {
  const index = str.indexOf(char);
  if (index === -1) {
    throw new Error(`Character '${char}' not found in the string.`);
  }
  return index;
}

function convertToLowercase(str: string): string {
  return str.toLowerCase();
}
