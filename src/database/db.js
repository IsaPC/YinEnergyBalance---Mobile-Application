import * as SQLite from 'expo-sqlite';

//connect to the database
const db = SQLite.openDatabase('yin.db');

// place all initiation for the database here
export const init = async () => {
    //TODO create tables if not exists sessions

    // Isaac - create tables
    CreatePlans().then(() => {
        console.log('\nInitialized plans table');
    }).catch(err => {
        console.log('Initialized the table plans failed');
        console.log(err);
    }); 

    CreateEvents().then(() => {
        console.log('\nInitialized events table');
    }).catch(err => {
        console.log('Initialized the table events failed');
        console.log(err);
    });

    // Aashish - create tables
    CreateDetails().then(() => {
        console.log('\nInitialized details table');
    }).catch(err => {
        console.log('Initialized the table events failed');
        console.log(err);
    });
    //Minh - create tables
    CreateDetails().then(() => {
        console.log('\nInitialized notes table');
    }).catch(err => {
        console.log('Initialized the table notes failed');
        console.log(err);
    });
}; // END init


//create tables -Isaac
export const CreatePlans = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS plans (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, description TEXT);',
                [],
                () => {
                resolve();
                },
                (_, err) => {
                reject(err);
                }
            );
        });
    });
    return promise;
};


export const CreateEvents = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, date TEXT NOT NULL);',
                [],
                () => {
                resolve();
                },
                (_, err) => {
                reject(err);
                }
            );
        });
    });
    return promise;
};


// create tables - Aashish
export const CreateDetails = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS details (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, age TEXT NOT NULL,address TEXT NOT NULL,phone TEXT NOT NULL,email TEXT NOT NULL, notes TEXT);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

// create tables - Minh
export const CreateNotes = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, date TEXT NOT NULL);',
                [],
                () => {
                resolve();
                },
                (_, err) => {
                reject(err);
                }
            );
        });
    });
    return promise;

}; // END

//----  plans - Isaac  ---//
export const insertPlan = (title, imageUri, desc) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'INSERT INTO plans (title, imageUri, description) VALUES (?,?,?);',
            [title, imageUri, desc],
            (_, result) => {
                console.log('insert succeeded');
                resolve(result);
            },
            (_, err) => {
                console.log('insert failed');
                console.log(err);
                resolve(reject);
            });
        });
    });
    return promise;
}; // END


export const selectAllPlans = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
            'SELECT * FROM plans',
            [],
            (_, result) => {
                resolve(result);
            },
            (_, err) => {
                reject(err);
            });
        });
    });
    return promise;
}; // END
    
    
export const updatePlan = (id, title, imageUri , description) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'UPDATE plans SET title=?, imageUri=?, description=? WHERE id=?;',
            [title, imageUri, description, id],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            });
        });
    });
    return promise;
}; // END


export const deletePlan = (id) => {
    const promise = new Promise((resolve, reject) => { 
        db.transaction(tx => {
            tx.executeSql('DELETE FROM plans WHERE id = ?;',
            [id],
            (_, result) => {
             resolve(result);
            },
            (_, err) => {
                reject(err);
            });
        });
    });
    return promise;
}; // END


//----  events - Isaac  ---//
export const insertEvent = (title, date) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'INSERT INTO events (title, date) VALUES (?,?);',
            [title, date],
            (_, result) => {
                console.log('insert succeeded');
                resolve(result);
            },
            (_, err) => {
                console.log('insert failed');
                console.log(err);
                resolve(reject);
            });
        });
    });
    return promise;
};
    export const insertNotes = (desc) => {
        const promise = new Promise((resolve, reject) => {
            db.transaction(tx => {
              tx.executeSql(
                'INSERT INTO Notes (description) VALUES ?;',
                [desc],
                (_, result) => {
                    console.log('addTask');
                    resolve(result);
                },
                (_, err) => {
                    console.log('insert failed');
                    console.log(err);
                    resolve(reject);
                });
            });
        });
        return promise;
    };
 // END


//----  details - Aashish  ---//
export const insertDetails = (name, age, address, phone, email, notes) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO details (name, age, address, phone, email, notes) VALUES (?,?,?,?,?,?);',
                [name, age, address, phone, email, notes],
                (_, result) => {
                    console.log('insert succeeded');
                    resolve(result);
                },
                (_, err) => {
                    console.log('insert failed');
                    console.log(err);
                    resolve(reject);
            });
        });
    });
    return promise;
}; // END


export const selectAllDetails = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM details',
                [],
                (_, result) => {
                    console.log('show records');
                    console.log(result);
                    resolve(result);
                },
                (_, err) => {
                    console.log('catch');
                    console.log(err);
                    reject(err);
            });
        });
    });
    return promise;
}; // END


export const updateDetail = (id, name, age, address, phone, email, notes) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE details SET name=?, age=?, address=?, phone=?, email=?, notes=? WHERE id=?;',
                [name, age, address, phone, email, notes, id],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
            });
        });
    });
    return promise;
}; // END


export const deleteDetails = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM details WHERE id = ?;',
                [id],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
            });
        });
    });
    return promise;
}; // END