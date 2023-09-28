import React, { useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, Image, View, Alert } from "react-native"
import { s } from './Event.style'
import checked from '../../assets/checked.png'

export function Event({ eventsData, setEventsData, filter, index, onChangeIsDone, name, description, duration, datetime, cost, isDone }) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const lastTap = useRef(null);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const handlePress = () => {
        const now = Date.now();
        if (lastTap.current && now - lastTap.current < 300) {
            onDoubleTap();
            toggleDescription()
        } else {
            lastTap.current = now;
            toggleDescription()
        }
    };

    const onDoubleTap = () => {
        onChangeIsDone(index, !isDone);
    };

    function deleteEvent() {
        Alert.alert('Delete', 'Delete this task ?', [
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    const updatedEventsData = [...eventsData];
                    updatedEventsData.splice(index, 1);
                    setEventsData(updatedEventsData);
                }
            },
            {
                text: 'Undo',
                style: 'cancel'
            }
        ])
    }


    return (
        <View>
            {filter === 'all' && (
                <TouchableOpacity onPress={handlePress} onLongPress={deleteEvent} style={s.event} >
                    <View style={s.highBar}>
                        <Text style={[s.name, isDone && { textDecorationLine: "line-through" }]}>{name}</Text>
                        {isDone && <Image source={checked} style={s.img} />}
                    </View>
                    {
                        showFullDescription ? (
                            <Text>{description}</Text>
                        ) : (
                            <Text numberOfLines={1} ellipsizeMode="tail">
                                {description}
                            </Text>
                        )
                    }
                    <View style={s.lowBar}>
                        <Text style={{ flex: 1 }}>{cost} €</Text>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text>{duration}</Text>
                        </View>
                        <Text style={{ flex: 1, textAlign: 'right' }}>{datetime}</Text>
                    </View>
                </TouchableOpacity>
            )}
            {filter === 'isDone' && isDone && (
                <TouchableOpacity onPress={handlePress} onLongPress={deleteEvent} style={s.event} >
                    <View style={s.highBar}>
                        <Text style={[s.name, isDone && { textDecorationLine: "line-through" }]}>{name}</Text>
                        {isDone && <Image source={checked} style={s.img} />}
                    </View>
                    {
                        showFullDescription ? (
                            <Text>{description}</Text>
                        ) : (
                            <Text numberOfLines={1} ellipsizeMode="tail">
                                {description}
                            </Text>
                        )
                    }
                    <View style={s.lowBar}>
                        <Text style={{ flex: 1 }}>{cost}</Text>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text>{duration}</Text>
                        </View>
                        <Text style={{ flex: 1, textAlign: 'right' }}>{datetime}</Text>
                    </View>
                </TouchableOpacity>
            )}
            {filter === 'inProgress' && !isDone && (
                <TouchableOpacity onPress={handlePress} onLongPress={deleteEvent} style={s.event} >
                    <View style={s.highBar}>
                        <Text style={[s.name, isDone && { textDecorationLine: "line-through" }]}>{name}</Text>
                        {isDone && <Image source={checked} style={s.img} />}
                    </View>
                    {
                        showFullDescription ? (
                            <Text>{description}</Text>
                        ) : (
                            <Text numberOfLines={1} ellipsizeMode="tail">
                                {description}
                            </Text>
                        )
                    }
                    <View style={s.lowBar}>
                        <Text style={{ flex: 1 }}>{cost}</Text>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text>{duration}</Text>
                        </View>
                        <Text style={{ flex: 1, textAlign: 'right' }}>{datetime}</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}
