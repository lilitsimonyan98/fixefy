export type Data = {
    _id: string,
    readable_id: string,
    value: number,
    extended: {
        difference: number,
        original_value: number,
        buyer: {
            reference: string[]
        },
        seller: {
            reference: string[]
        }
    },
    event: {
        _id: string,
        readable_id: string,
        title: string
    },
    service: {
        _id: string,
        readable_id: string,
        title: string
    },
    status: string
};



export const demoData: Data = JSON.parse(JSON.stringify({
    "__typename": "Charge",
    "_id": "631daec08634f52b1445bca3", "readable_id": "charge-g0e1agog484uw4ci", "value": 479.3952999894014,
    "extended": {
        "__typename": "ChargeExtended", "original_value": 479.3952999894014, "variance": 0,
        "difference": 0,
        "buyer": {
            "__typename": "ChargeExtendedBuyer", "reference": [
                "SHL22040565"]
        }, "seller": {
            "__typename": "ChargeExtendedSeller", "reference": [
                "TLB4053883"]
        }
    },
    "event": {
        "__typename": "Event",
        "_id": "60edb11d24aa9a00089b9aeb", "readable_id": "event-4gmu6oqsea", "title": "import_duties_(750)"
    }, "service": {

        "__typename": "Service",
        "_id": "60ed592d24aa9a00089b9aa9", "readable_id": "service-m6myguyqoi",
        "title": "DB Schenker Ground Transportation"
    },
    "status": "approved"
}))