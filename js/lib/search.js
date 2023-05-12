export default function getSearch() {
  return Object.fromEntries(
    location.search
      .slice(1)
      .split('&')
      .filter(x => x)
      .map(res => res.split('='))
      .map(([key, value]) => [key, value.replaceAll('-', ' ')])
  );
}