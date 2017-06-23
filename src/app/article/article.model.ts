export class Article {
  constructor(
    public title: string,
    public link: string,
    public votes: number = 0
  ) { }
  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
