import React, { Component } from 'react'
import ReactSummernote from 'react-summernote'
import 'react-summernote/dist/react-summernote.css' // import styles

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/dist/css/bootstrap.css'

class RichTextEditor extends Component {
  onChange(content) {
    console.log('onChange', content)
  }

  render() {
    return (
      <ReactSummernote
        value="Default value"
        options={{
          lang: 'ru-RU',
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['para', ['ul', 'ol']],
            ['color', ['color']],
          ],
        }}
        onChange={this.onChange}
      />
    )
  }
}

export default RichTextEditor
