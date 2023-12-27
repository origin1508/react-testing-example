export function kebabCaseToTitleCase(name) {
  const nameWithSpaces = name.replaceAll("-", " ");
  const nameWithCaps = nameWithSpaces.replace(/\b([a-z])/g, (match) =>
    match.toUpperCase()
  );

  return nameWithCaps;
}
