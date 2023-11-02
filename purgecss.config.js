module.exports = {
    content: ['./src/*.html'],  // この部分を適切に変更して、HTMLファイルのパスを指定します。
    css: ['./node_modules/bootstrap/dist/css/bootstrap.css'],
    output: './src/css',  // 出力先のディレクトリ
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
  