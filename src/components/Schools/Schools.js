import styles from '../../styles/Adults.module.css'

import * as React from 'react'

import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useState} from 'react'
import EnterClass from './enterClass'
import ClassTabs from './ClassTabs.js'
import {Amplify} from 'aws-amplify';
import awsconfig from '../../aws-exports';
import {Button } from '@mui/material'


Amplify.configure(awsconfig);


export default function Schools({ classes }) {
    
    const [classList, setClassList] = useState(classes);
    const [isOpen, setIsOpen] = useState(false);


   

    const handleSubmit = (newClass) => {
        setClassList(newClass);
    }

    const handleOpenClose = () =>{
        if(!isOpen){
            setIsOpen(false)
        } else{
            setIsOpen(true)
        }
    }
    return (
        <div className={`container ${styles.border}`}>
            <header className={styles.red}>
                <h1 className="title">School Name - Dashboard</h1>
                <p className="lead">
                    In your dashboard you will be able to add classrooms and see
                    how your pupils are doing. As well as access resources for
                    emotional support.
                </p>
            </header>
            <main>
                <div className={styles.border_bottom}>
                    <h2>My Classrooms</h2>
                    <Button variant="contained" onClick={handleOpenClose}>add new +</Button>
                    {isOpen && <EnterClass value ={classList} onChange ={handleSubmit} onClose={handleOpenClose}/>}
                </div>
                
                <ClassTabs classList={classList}/>

                <div className={styles.border_bottom}>
                    <h2>Enable / Diable Emotions</h2>
                </div>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Alone"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Anxious"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Ashamed"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Bored"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Chatty"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Comfortable"
                    />
                    <FormControlLabel control={<Switch />} label="Guilty" />
                    <FormControlLabel control={<Switch />} label="Confident" />
                    <FormControlLabel control={<Switch />} label="Confused" />
                    <FormControlLabel control={<Switch />} label="Self-harm" />
                </FormGroup>
            </main>
        </div>
    )
}
