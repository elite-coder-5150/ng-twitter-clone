export interface BasicRecordSchema {
    id: number
    created: number
    updated: number
}

interface IBasicRecord {
    initEmptyRecord: AbstractBasicRecod
}

abstract class AbstractBasicRecod {
    protected static MemberVariablesName: Array<string> = [
        'id',
        'created',
        'updated'
    ];

    protected static implements(keys: Array<string>, data: AbstractBasicRecod): boolean {
        return keys.every((key) => Object.keys(data).includes(key))
    }

    public static instanceOf(data: AbstractBasicRecod, partal = false): boolean {
        return this.implements(this.getKeys(), data)
    }

    protected static getKeys(): Array<string> {
        return [...this.MemberVariablesName];
    }
}

class BasicRecord extends AbstractBasicRecod implements IBasicRecord {
    public id: string = ''
    public created: string = ''
    public updated: string = '';

    constructor(data: Partial<BasicRecordSchema>) {
        super();
        if (data) {
            if (BasicRecord.instanceOf(data)) {
                Object.assign(this, data);
            } else if (Object.keys(data).length < 3) {
                const dString = JSON.stringify(data);

                throw new Error(`Attempted to initialize a Basic Record with a malformed object: ${dString}`)
            }
        } else {
            Object.assign(this, this.initEmptyRecord())
        }
    }

    //?------------------------------------------------------------------------
    //? I found out that the original code caused VS Code to start kicking and 
    //? screaming 
    //? to be honest I have no clue how he got the code to to work in the first
    //? place.
    //?------------------------------------------------------------------------
    initEmptyRecord() {
        const record: BasicRecordSchema = {
            id: this.generateId(),
            created: Date.now(),
            updated: Date.now()
        };

       return record;
    }

    generateId() {
        return 0
    }
}