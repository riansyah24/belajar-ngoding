function consonantCounterRecursive(sentences) {
  if (sentences === '') {
    return 0;
  } else {
    const firstChar = sentences[0].toLowerCase();
    if (firstChar >= 'a' && firstChar <= 'z' && !'aeiou'.includes(firstChar)) {
      return 1 + consonantCounterRecursive(sentences.slice(1));
    } else {
      return consonantCounterRecursive(sentences.slice(1));
    }
  }
}
console.log(consonantCounterRecursive('alDi Suka MakAn baksO'))
console.log(consonantCounterRecursive('AziZy'))
console.log(consonantCounterRecursive('awt6an'))
