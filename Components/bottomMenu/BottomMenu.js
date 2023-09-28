import { TouchableOpacity, Text, View } from 'react-native'
import { s } from './BottomMenu.style'
import { useEffect, useState } from 'react'

export function BottomMenu({ eventsData, changeTabName, tabName }) {

    function getTextStyle(tabNameLocal) {
        return { fontWeight: 'bold', backgroundColor: tabNameLocal == tabName ? 'white' : 'transparent', color: tabNameLocal == tabName ? 'black' : 'white', color: tabNameLocal == tabName ? 'white' : 'transparent', color: tabNameLocal == tabName ? 'black' : 'white' }
    }

    const [eventDone, setEventDone] = useState(0)
    useEffect(() => {
        let countEventsDone = eventsData.filter(e => e.isDone)
        setEventDone(countEventsDone.length)
    }, [eventsData])

    return (
        <View style={s.container}>
            <TouchableOpacity onPress={() => changeTabName('all')} style={[getTextStyle('all'), s.btn]}><Text style={[getTextStyle('all'), { backgroundColor: 'transparent' }]}>All <Text style={{ fontSize: 12 }}>{`- ${eventsData.length}`}</Text></Text></TouchableOpacity>
            <TouchableOpacity onPress={() => changeTabName('inProgress')} style={[getTextStyle('inProgress'), s.btn]}><Text style={[getTextStyle('inProgress'), { backgroundColor: 'transparent' }]}>In progress <Text style={{ fontSize: 12 }}>{`- ${eventsData.length - eventDone}`}</Text></Text></TouchableOpacity>
            <TouchableOpacity onPress={() => changeTabName('isDone')} style={[getTextStyle('isDone'), s.btn]}><Text style={[getTextStyle('isDone'), { backgroundColor: 'transparent' }]}>Done <Text style={{ fontSize: 12 }}>{`- ${eventDone}`}</Text></Text></TouchableOpacity>
        </View>
    )
}