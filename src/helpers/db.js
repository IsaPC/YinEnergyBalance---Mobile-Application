import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('yin.db');
// place all initiation for the database here
export const init = () => {
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
            `INSERT INTO plans (title, imageUri, description) VALUES (?,?,?);`,
            [title, imageUri, desc],
            (_, result) => {
                console.log('insert succeeded');
                resolve(result);
            },
            (_, err) => {
                console.log('insert failed');
              reject(err);
            });
        });
    });
    return promise;
};

export const selectAllPlans = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `SELECT * FROM plans`,
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