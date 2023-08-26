
import React from 'react';
import { useState} from 'react'
import styles from '../../styles/ExpandedVideo.module.css'
import Image from 'next/image'


import { API } from 'aws-amplify';
import * as mutations from "../../graphql/mutations";


const EnterClass = React.memo(({onClose}) => {
    const [inputValue, setInputValue] = useState('');

    const createStudents = async () => {
        try {
            await API.graphql({
                query: mutations.createStudents,
                variables: { input: { name: inputValue } },
            });

        } catch (error) {
            console.error('Error adding student and association:', error);
        }

    };


    return (
        <div className={styles.overlay}>
            <div className={styles.centered}>
                <Image
                    src={`/assets/img/closebutton.jpg`}
                    alt=''
                    width={20}
                    height={20}
                    onClick={onClose}
                    className={styles.closeButton}
                />
                <input
                    type="text"
                    placeholder="Student Name"
                    value={inputValue}
                    onChange={(event) =>
                        setInputValue(event.target.value)
                    }
                />

                <button onClick={() => createStudents({inputValue})}>Add Student</button>

            </div>
        </div>
    );
});

EnterClass.displayName = 'EnterClass';

export default EnterClass;