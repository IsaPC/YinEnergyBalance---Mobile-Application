import React, { useContext } from 'react';
import { PlanContext } from '../contexts/PlanContext';

import {View, Text} from 'react-native';

const ListPlanScreen = props => {
    const { plans } = useContext(PlanContext);

    return (
        <View>
            <Text>{ plans.length }</Text>
        </View>
    );
}

export default ListPlanScreen;