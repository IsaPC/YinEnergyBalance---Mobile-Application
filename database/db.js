import React, { useContext } from 'react';

import * as SQLite from 'expo-sqlite';





const db = SQLite.openDatabase('yin.db');



export const init = async () => {

    CreateDetails().then(() => {

        console.log('Name registered');

    }).catch(err => {

        console.log('Registering Name failed');

        console.log(err);

    }); 



}



//----  plans  ---//



//create table

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

};


export const selectAllDetails = () => {

    const promise = new Promise((resolve, reject) => {

        db.transaction(tx => {

            tx.executeSql(

            'SELECT * FROM details',

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

}



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

}