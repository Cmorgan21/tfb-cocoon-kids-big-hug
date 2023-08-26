// pages/school.js (or any appropriate file name)
import React from 'react';
import Layout from '../../components/layout/Layout';
import Schools from '../../components/Schools/Schools';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';


export async function getServerSideProps() {

    try {
        const classData = await API.graphql({
            query: queries.listClasses,
        });

        const classes = classData.data.listClasses.items;


        return {
            props: {
                classes,
            },
        };
    } catch (error) {
        console.error('Error fetching classes:', error);
        return {
            props: {
                classes: [],
            },
        };
    }
}

function SchoolPage({ classes }) {
    return (
        <Layout isLanding={true} showEmergency={false}>
            <Schools classes={classes} />
        </Layout>
    );
}
export default SchoolPage;
