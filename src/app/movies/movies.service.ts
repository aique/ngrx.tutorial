import { Observable, of } from "rxjs";

export class MoviesService {
    getAll(): Observable<string[]> {
        return of([
            'The Godfather',
            'Apocalypse Now',
            'Citizen Kane',
            'Mulholland Drive',
            'Vertigo'
        ])
    }
}