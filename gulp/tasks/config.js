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
    './node_modules/datatables.net/js/jquery.dataTables.js',
    './node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.js',
    './node_modules/datatables.net-responsive/js/dataTables.responsive.js'
  ],

  // Asset File Paths
  assets: [
    './src/assets/**/*',
    './node_modules/datatables.net-dt/images/**/*'
  ],

  // Fonts Path
  fonts: [
    './src/fonts/**/*'
  ],

  // Export path
  exportPath: ['./dist']
}
