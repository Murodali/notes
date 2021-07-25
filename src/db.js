import Dexie from 'dexie';

const db = new Dexie('MyNotesDataBase');
db.version(1).stores({ notes: '++id, title, content' });



db.open();



export default db;