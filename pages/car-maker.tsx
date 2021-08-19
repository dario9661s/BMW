import { MongoClient } from "mongodb"
import React, { useEffect } from "react"
import Stepper from "../components/Stepper"
import ModalSelector from "../components/ModalSelector"
import Grid from "@material-ui/core/Grid"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators, State } from "../state"

function Index(props: { frontBumpers: Object, backBumpers: Object, steeringWheels: Object, computer: Object, wheels: Object}) {
  const dispatch = useDispatch()
  const products = useSelector((state: State) => state.products)
  // const active = useSelector((state: State) => state.active)
  const { setActive } = bindActionCreators(actionCreators, dispatch)
  const { setFront } = bindActionCreators(actionCreators, dispatch)
  const { setUpgrade } = bindActionCreators(actionCreators, dispatch)

  console.log(products)
  useEffect(() => {
    let steeringWheelsArray = []
    let wheelsArray = []
    let computerArray = []
    let frontBumpersArray = []
    let backBumpersArray = []
    for (const [key, value] of Object.entries(props.frontBumpers)) {
      frontBumpersArray.push({
        [key]: value,
      })
    }
    for (const [key, value] of Object.entries(props.backBumpers)) {
      backBumpersArray.push({
        [key]: value,
      })
    }
    for (const [key, value] of Object.entries(props.steeringWheels)) {
      steeringWheelsArray.push({
        [key]: value,
      })
    }
    for (const [key, value] of Object.entries(props.computer)) {
      computerArray.push({
        [key]: value,
      })
    }
    for (const [key, value] of Object.entries(props.wheels)) {
      wheelsArray.push({
        [key]: value,
      })
    }
    setFront({ frontBumpers: frontBumpersArray, backBumpers: backBumpersArray, steeringWheels:steeringWheelsArray, computer: computerArray, wheels: wheelsArray})
    setActive(frontBumpersArray[0])
    setUpgrade("frontBumperUpgrades")
  }, [])
  return (
    <Grid
      className="main"
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid
        style={{ width: "550px", height: "100%" }}
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Stepper />
      </Grid>
      <div className="neonCage">
      <ModalSelector />
      {products.active ?<img style={{ width: "100%" }} src={`images/${products.upgrade}/${Object.keys(products.active)[0]}.png`} /> : null}
      
      </div>
    </Grid>
  )
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://dario:dario9661@cluster0.yfi9a.mongodb.net/Bmw?retryWrites=true&w=majority"
  )
  const db = client.db()

  const f30Collection = db.collection("F30")

  const upgrades = await f30Collection.find().toArray()
  console.log(upgrades)
  client.close()

  return {
    props: {
      frontBumpers: upgrades[0].frontBumpers,
      backBumpers: upgrades[0].backBumpers,
      steeringWheels: upgrades[0].steeringWheel,
      computer: upgrades[0].computer,
      wheels: upgrades[0].wheels,
    },
    revalidate: 1,
  }
}

export default Index
