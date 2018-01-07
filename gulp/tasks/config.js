// Config Paths

module.exports = {
  // Here you add the paths to the scss files you get with Bower to import and work with.
  sassIncludes: [
    './node_modules/penny-mixins/src',
    './node_modules/datatables.net-dt/css/jquery.dataTables.css'
  ],

  // Here you add the paths to the full-length js files from your Bower imports
  scriptFiles: [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/chart.js/dist/Chart.min.js'
  ],

  // Asset File Paths
  assets: [
    './src/assets/**/*'
  ],

  // Fonts Path
  fonts: [
    './src/fonts/**/*'
  ],

  // Export path
  exportPath: ['./dist']
}
