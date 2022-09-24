function enLanguage(value = {}) {
  return {
    my: 'my',
    your: `your${value.user}`,
  };
}

export default enLanguage;
