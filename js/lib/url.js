export function urlToString(url) {
  return url
    ? url
        .replaceAll('%20', ' ')
        .replaceAll('%21', '!')
        .replaceAll('%22', '"')
        .replaceAll('%23', '#')
        .replaceAll('%24', '$')

        .replaceAll('%26', '&')
        .replaceAll('%27', "'")
        .replaceAll('%28', '(')
        .replaceAll('%29', ')')
        .replaceAll('%2A', '*')
        .replaceAll('%2B', '+')

        .replaceAll('%2F', '/')

        .replaceAll('%3C', '<')
        .replaceAll('%3D', '=')
        .replaceAll('%3E', '>')
        .replaceAll('%3F', '?')

        .replaceAll('%5B', '[')
        .replaceAll('%5C', '\\')
        .replaceAll('%5D', ']')
        .replaceAll('%5E', '^')

        .replaceAll('%60', '`')

        .replaceAll('%7B', '{')
        .replaceAll('%7C', '|')
        .replaceAll('%7D', '}')
        .replaceAll('%7E', '~')
    : '';
}
export function stringToUrl(str) {
  return (str || 'null')
    .replaceAll(' ', '%20')
    .replaceAll('!', '%21')
    .replaceAll('"', '%22')
    .replaceAll('#', '%23')
    .replaceAll('$', '%24')

    .replaceAll('&', '%26')
    .replaceAll("'", '%27')
    .replaceAll('(', '%28')
    .replaceAll(')', '%29')
    .replaceAll('*', '%2A')
    .replaceAll('+', '%2B')

    .replaceAll('/', '%2F')

    .replaceAll('<', '%3C')
    .replaceAll('=', '%3D')
    .replaceAll('>', '%3E')
    .replaceAll('?', '%3F')

    .replaceAll('[', '%5B')
    .replaceAll('\\', '%5C')
    .replaceAll(']', '%5D')
    .replaceAll('^', '%5E')

    .replaceAll('`', '%60')

    .replaceAll('{', '%7B')
    .replaceAll('|', '%7C')
    .replaceAll('}', '%7D')
    .replaceAll('~', '%7E');
}