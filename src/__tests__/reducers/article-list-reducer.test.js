import articleListReducer from '../../reducers/article-list-reducer';

describe('articleListReducer', () => {

  let action;
  const articleData = {
    title: 'Why is Rick so Sick, for Real tho?',
    headline: "YO , look Rick and Michelle are like Futuro's favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought...",
    body: "YO , look Rick and Michelle are like Futuro's favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought...",
    author: 'Joey P',
    date: '02-19-2020',
    category: 'People',
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(articleListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new article data to articleList', () => {
    const { title, headline, body, author, date, category, id } = articleData;
    action = {
      type: 'ADD_ARTICLE',
      title: title,
      headline: headline,
      body: body,
      author: author,
      date: date,
      category: category,
      id: id,
    };

    expect(articleListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        headline: headline,
        body: body,
        author: author,
        date: date,
        category: category,
        id: id,
      }
    });
  });

});
