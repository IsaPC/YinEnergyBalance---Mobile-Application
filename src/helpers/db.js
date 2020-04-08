import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('yin.db');

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
            `INSERT INTO plans (title, imageUri, description) VALUES (?, ?, ?);`,
            [title, imageUri, desc],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            });
        });
    });
    return promise;
};