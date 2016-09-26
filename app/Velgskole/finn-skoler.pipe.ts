import {Pipe} from '@angular/core';

@Pipe(
    {
        name: "sok"
    }
)


export class FinnSkolerPipe{
    transform(value: any, args: string[]): any {
       let filter = args[0].toLowerCase()
       return filter ? value.filter(args[0] => args[0].toLocaleLowerCase()
                             .indexOf(filter) != -1) : value;
    }
}
