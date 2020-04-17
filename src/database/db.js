import React, { useContext } from 'react';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('yin.db');
// place all initiation for the database here
export const init = async () => {
    CreatePlans().then(() => {
        console.log('Initialized plans table');
    }).catch(err => {
        console.log('Initialized the database failed');
        console.log(err);
    }); 

}

//----  plans  ---//

//create table
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
};

// export const selectAllPlans = () => {
//     const promise = new Promise((resolve, reject) => {
//     db.transaction(tx => {
        
//         tx.executeSql(
//         'SELECT * FROM plans',
//             [],
//             (_, { rows: { _array } }) => {return _array});
//         }
        
//     )}

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
}
    
    

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
}

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
}