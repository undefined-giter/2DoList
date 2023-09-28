import { s } from './AddButton.style'
import { useEffect, useState } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Dialog from 'react-native-dialog'

export function AddButton({ eventsData, setEventsData }) {


    const [isAddDialogVisible, setIsAddDialogVisible] = useState(false)
    const [eventDetails, setEventDetails] = useState({
        name: '',
        description: '',
        duration: '',
        datetime: '',
        cost: '',
        isDone: false,
    });

    function showAddDialog() {
        setIsAddDialogVisible(true)
    }

    function handleCreateEvent() {
        if (eventDetails.name && eventDetails.datetime && eventDetails.cost) {
            const newEvent = {
                name: eventDetails.name,
                description: eventDetails.description,
                duration: eventDetails.duration,
                datetime: eventDetails.datetime,
                cost: eventDetails.cost,
                isDone: eventDetails.isDone,
            };
            setEventsData([...eventsData, newEvent]);
            hideAddDialog();
        } else {
            alert('Fill up all field please');
        }
    }

    function hideAddDialog() {
        setIsAddDialogVisible(false);
        setEventDetails({
            name: '',
            description: '',
            duration: '',
            datetime: '',
            cost: '',
            isDone: false,
        });
    }

    return (
        <>
            <TouchableOpacity TouchableOpacity onPress={showAddDialog} style={s.btn} >
                <Text style={s.txt}>Add Event</Text>
            </TouchableOpacity >
            <Dialog.Container visible={isAddDialogVisible} onBackdropPress={hideAddDialog}>
                <Dialog.Title>Create your Event</Dialog.Title>
                <Dialog.Description>Fill in the details of your event:</Dialog.Description>
                <Dialog.Input
                    label="Name"
                    onChangeText={(text) => setEventDetails({ ...eventDetails, name: text })}
                    value={eventDetails.name}
                    maxLength={45}
                />
                <Dialog.Input
                    label="Description"
                    onChangeText={(text) => setEventDetails({ ...eventDetails, description: text })}
                    value={eventDetails.description}
                    multiline={true}
                    numberOfLines={2}
                    maxLength={255}
                />
                <Dialog.Input
                    label="Duration"
                    onChangeText={(text) => setEventDetails({ ...eventDetails, duration: text })}
                    value={eventDetails.duration}
                    maxLength={5}
                />
                <Dialog.Input
                    label="Time and Date"
                    onChangeText={(text) => setEventDetails({ ...eventDetails, datetime: text })}
                    value={eventDetails.datetime}
                    maxLength={17}
                />
                <Dialog.Input
                    label="Cost"
                    onChangeText={(text) => setEventDetails({ ...eventDetails, cost: text })}
                    value={eventDetails.cost}
                    keyboardType="numeric"
                    maxLength={4}
                />
                <Dialog.Button label="Create" onPress={handleCreateEvent} />
            </Dialog.Container>
        </>
    )
}