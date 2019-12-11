const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const yargs = require('yargs');
const notes = require('./notes.js');
var argv = yargs
.command('list','list all file')
.command('upload','upload a  file' ,{
    filename : {
    
      description : 'filename',
      demand : true,
      alias :'f'
  
    }
})
.command('download','download a note' ,{
    fileid : {
    
      description : 'file id',
      demand : true,
      alias :'id'
  
    }
})
.command('delete','delete a note' ,{
  fileid : {
  
    description : 'file id',
    demand : true,
    alias :'id'

  }
})
.help()
.argv;
var command = argv._[0];
if(command ==='list'){
      notes.listfiles();
}else if(command ==='upload'){
  notes.uploadfiles(argv.filename);
}else if(command ==='download'){
  notes.downloadfiles(argv.fileid);
}else if(command ==='delete'){
  notes.deletefiles(argv.fileid);
}else {
  console.log('command not found');
}


