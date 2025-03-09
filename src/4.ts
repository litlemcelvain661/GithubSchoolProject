import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-githubschoolproject',
  templateUrl: './githubschoolproject.component.html',
  styleUrls: ['./githubschoolproject.component.css']
})
export class GithubschoolprojectComponent {
  githubSchoolProject: any;
  constructor(private http: HttpClient) {}
  getData() {
    this.http.get('https://api.github.com/users/octocat').subscribe((data: any) => {
      this.githubSchoolProject = data;
    });
  }
}