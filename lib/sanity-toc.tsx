var getSlug = require('speakingurl');

const get = (object, path) => path.reduce((prev, curr) => prev[curr], object)

const getObjectPath = path =>
  path.length === 0
    ? path
    : ['subheadings'].concat(path.join('.subheadings.').split('.'))

const getChildrenText = props =>
    props.children
      .map(node => (typeof node === 'string' ? node : node.text || ''))
      .join('')

const filter = (ast, match) =>
  ast.reduce((acc, node) => {
    if (match(node)) acc.push(node)
    if (node.children) acc.push(...filter(node.children, match))
    return acc
  }, [])

  const findHeadings = ast => filter(ast, node => /h\d/.test(node.style)).map(node => {
    const text = getChildrenText(node)
    const slug = getSlug(text)

    return { ...node, text, slug }
  })



const TableOfContents = props => (
  <ol>
    {props.outline.map(heading => (
      <li key={ heading.slug }>
        <a href={'#' + heading.slug}>{getChildrenText(heading)}</a>
        {heading.subheadings && heading.subheadings?.length > 0 && (
          <TableOfContents outline={heading.subheadings} />
        )}
      </li>
    ))}
  </ol> 
) 

export function parseOutline(ast): any {
  const outline = { subheadings: [] }
  const headings = findHeadings(ast)
  const path = []
  let lastLevel = 0

  headings.forEach(heading => {
    const level = Number(heading.style.slice(1))
    heading.subheadings = []

    if (level < lastLevel) for (let i = lastLevel; i >= level; i--) path.pop()
    else if (level === lastLevel) path.pop()

    const prop = get(outline, getObjectPath(path))
    prop.subheadings.push(heading)
    path.push(prop.subheadings.length - 1)
    lastLevel = level
  })
  console.log(outline)
  return outline.subheadings
}




