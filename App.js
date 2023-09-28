import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { View, ScrollView } from "react-native"
import { useState, useEffect } from 'react'
import { s } from './App.style'
import { Header } from "./Components/Header/Header"
import { Event } from './Components/Event/Event'
import { BottomMenu } from './Components/bottomMenu/BottomMenu'
import { AddButton } from './Components/AddButton/AddButton'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'


let firstRender = true

export default function App() {

  const [eventsData, setEventsData] = useState([])

  useEffect(() => {
    loadEventList()
  }, [])

  useEffect(() => {
    if (!firstRender) { saveEventList() }
    else if (firstRender && eventsData.length === 0) {
      setEventsData(
        [
          {
            name: "Boire un verre",
            description: "Boire un verre blablabla blablabla blablabla blablabla blablabla blablabla Boire un verre",
            duration: "4h",
            datetime: "19h 5 juin",
            cost: '30',
            isDone: false,
          },
          {
            name: "Concours de blagues",
            description: "Concours de blagues entre nous blablabla blablabla blablabla Concours de blaguesConcours de blagues Concours de blagues",
            duration: "3h",
            datetime: "15h 20 octobre",
            cost: '0',
            isDone: true,
          },
          {
            name: "Visite du musée des arts modernes",
            description: "musée des arts modernes blablabla musée des arts modernes blablablamusée des arts modernes blablabla",
            duration: "2h",
            datetime: "13h 25 octobre",
            cost: '10',
            isDone: false,
          },
        ]
      )
      firstRender = false
    }
  }, [eventsData])

  async function saveEventList() {
    try {
      await AsyncStorage.setItem('@eventList', JSON.stringify(eventsData))
    } catch (err) {
      alert('Error' + err)
    }
  }

  async function loadEventList() {
    try {
      const stringifyEventList = await AsyncStorage.getItem('@eventList')
      if (stringifyEventList !== null) {
        let parsedEventList = JSON.parse(stringifyEventList)
        setEventsData(parsedEventList)
      }
    } catch (err) {
      alert('Error' + err)
    }
  }


  function onChangeIsDone(index, newIsDone) {
    const updatedEventsData = [...eventsData];
    updatedEventsData[index].isDone = newIsDone;
    setEventsData(updatedEventsData);
  }


  const [tabName, setTabName] = useState('all')
  function changeTabName(tabName) {
    setTabName(tabName)
  }


  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <GestureHandlerRootView>
            <View style={s.header}>
              <Header />
            </View>
            <View style={s.body}>
              <ScrollView>
                {eventsData.map((event, index) => (
                  <Event eventsData={eventsData} setEventsData={setEventsData} filter={tabName} key={index} index={index} onChangeIsDone={onChangeIsDone} name={event.name} description={event.description} duration={event.duration} datetime={event.datetime} cost={event.cost} isDone={event.isDone} style={[s.name, { marginTop: index === 0 ? 0 : 10 }]} />
                ))}
              </ScrollView>
            </View>
            <AddButton eventsData={eventsData} setEventsData={setEventsData} />
          </GestureHandlerRootView>
        </SafeAreaView>
      </SafeAreaProvider>
      <BottomMenu eventsData={eventsData} changeTabName={changeTabName} tabName={tabName} style={s.footer}></BottomMenu>
    </>
  )
}
