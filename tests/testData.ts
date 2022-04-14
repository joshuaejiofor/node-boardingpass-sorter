import jwt from 'jsonwebtoken'

export const testData = [
    {
      "from": "Barcelona",
      "to": "Gerona Airport",
      "transportType": 2,
      "vehicleNo": null,
      "gateNo": null,
      "seatNo": null,
      "ticketCounter": null,
      "actualSequence": 2
    },
    {
      "from": "Stockholm",
      "to": "New York JFK",
      "transportType": 3,
      "vehicleNo": "SK22",
      "gateNo": "22",
      "seatNo": "7B",
      "ticketCounter": null,
      "actualSequence": 4
    },
    {
      "from": "Madrid",
      "to": "Barcelona",
      "transportType": 1,
      "vehicleNo": "75A",
      "gateNo": null,
      "seatNo": "45B",
      "ticketCounter": null,
      "actualSequence":  1
    },
    {
      "from": "Gerona Airport",
      "to": "Stockholm",
      "transportType": 3,
      "vehicleNo": "SK455",
      "gateNo": "45B",
      "seatNo": "3A",
      "ticketCounter": "344",
      "actualSequence": 3
    }
  ]

  export const config = {JWT_STATIC_VALUE: "Joshua", JWT_SECRET: "YjA3NWU0MWMtMjVmMi00ZGE2LTlmODEtOWQ0ZGUyMThhNjVh"}

  export const token = jwt.sign(config.JWT_STATIC_VALUE || '', config.JWT_SECRET || '');