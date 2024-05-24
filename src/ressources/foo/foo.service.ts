import { Exception } from "../../utils/exceptions";

export class FooService {

    public async test(): Promise<string> {
        try {
            return 'ca marche';
        } catch (err) {
            throw err
        }
    }
}