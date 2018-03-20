import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class OmdbServiceClient {
  findMoviesByKeyword(keyword) {
    let url = 'http://omdbapi.com?';
    url += 's=' + keyword;
    url += '&apikey=852159f0';
    return this.ajax.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }
  findMovieByImdbId(imdbId) {
    let url = 'http://omdbapi.com?';
    url += 'i=' + imdbId;
    url += '&apikey=852159f0';
    return this.ajax.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }
  constructor(private ajax: Http) {}
}
