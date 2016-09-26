
export class SkolerService
{
    skoler: Array<string> = 
    ['Auglend skole', 'Buøy skole', 'Byfjord skole',
    'Eiganes skole', 'Gautesete skole', 'Gosen skole', 
    'Hundvåg skole', 'Johannes læringssenter']

    hentSkoler()
    {
        return this.skoler
    }
}