import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia'
import SlidePage from '../layouts/slide-page'
import Cover from './cover'
import SpeakerNotes from './speaker-notes'

const mdComponents = {
  h1: props => <h1 {...props} />,
  pre: props => props.children,
  code: props => {
    const { className } = props
    const language = className.replace('language-', '')
    return (
      <SyntaxHighlighter
        className={className}
        language={language}
        style={okaidia}
        {...props}
      />
    )
  },
  Cover,
  SlidePage,
  SpeakerNotes,
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
