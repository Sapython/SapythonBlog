import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { PostService } from 'src/app/services/post.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { WidgetsType } from 'src/app/sidebar/widgets/widgets.structures';
import { post, PostData } from 'src/app/structures/blog.structure';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class PostComponent implements OnInit {
  constructor(
    private srs: ScullyRoutesService,
    private postService: PostService,
    private dataProvider: DataProvider,
    private databaseService: DatabaseService,
    private alertify:AlertsAndNotificationsService
  ) {}
  dbPostData: post | undefined;
  postData: PostData | undefined;
  loadComments: boolean = false;
  dislikeDone: boolean = false;
  likeDone: boolean = false;
  favorite: boolean = false;
  postId: string = '';
  widgets: WidgetsType[] = [
    {
      widget: 'actionButton',
      data: {
        title: 'Subscribe',
        message: 'Subscribe to our newsletter',
        buttonText: 'Subscribe',
        buttonLink: '#',
        image:'post',
      },
    },
    {
      widget: 'testimonials',
      data: {
        title: 'Subscribe',
        subtitle: 'Subscribe to our newsletter',
        buttonText: 'Subscribe',
        buttonLink: '#',
      },
    },
    {
      widget: 'subscribe',
      data: {
        title: 'Subscribe',
        subtitle: 'Subscribe to our newsletter',
        buttonText: 'Subscribe',
        buttonLink: '#',
      },
    },
    {
      widget: 'postCarousel',
      data: {
        title: 'Subscribe',
        subtitle: 'Subscribe to our newsletter',
        buttonText: 'Subscribe',
        buttonLink: '#',
      },
    },
  ];
  ngOnInit() {
    this.srs.allRoutes$.forEach((routeList: any) => {
      this.postData = routeList.filter(
        (route: any) => route.route == window.location.pathname
      )[0];
      console.log('PostData', this.postData);
      if (this.postData) {
        this.postId = this.postData.route.replace('/blog/', '');
        this.postService.checkIfPostExists(this.postId).then((post) => {
          if (!post.exists()) {
            console.log('Post does not exist');
            this.dbPostData = {
              authorName: this.postData!.authorName,
              authorImage: this.postData!.authorImage,
              date: this.postData!.date,
              description: this.postData!.description,
              featuredImage: this.postData!.featuredImage,
              route: this.postData!.route,
              tags: this.postData!.tags,
              title: this.postData!.title,
              dislikes: 0,
              likes: 0,
              isFavorite: false,
              shares: 0,
            };
            this.postService
              .addPostDetail(this.postId, this.dbPostData)
              .then(() => {(this.loadComments = true);this.setData();});
          } else {
            this.postService.getPost(this.postId).then((post: any) => {
              console.log('Post', post.data());
              this.dbPostData = post.data();
              this.setData();
            });
            this.loadComments = true;
          }
        });
      }
    });
    // this.postService.checkIfPostExists(this.postData.)
  }
  setData() {
    if (this.dataProvider.userData) {
      this.likeDone = this.dataProvider.userData.likedPost.includes(
        this.postId
      );
      this.dislikeDone = this.dataProvider.userData.dislikedPost.includes(
        this.postId
      );
      this.favorite = this.dataProvider.userData.favorites.includes(
        this.postId
      );
    }
  }
  likedPost(event: any) {
    if (event) {
      this.databaseService.likePost(this.postId).then(() => {
        this.alertify.presentToast('Liked');
      });
    } else {
      this.databaseService.unlikePost(this.postId).then(() => {
        // this.alertify.presentToast('Unliked');
      });
    }
  }
  dislikedPost(event: any) {
    if (event) {
      this.databaseService.dislikePost(this.postId).then(() => {
        this.alertify.presentToast('Disliked');
      });
    } else {
      this.databaseService.unDislikePost(this.postId).then(() => {
        // this.alertify.presentToast('Undisliked');
      });
    }
  }
  markedFavorite(event: any) {
    if (event) {
      this.databaseService.markFavorite(this.postId).then(() => {
        this.alertify.presentToast('Marked as favorite');
      });
    } else {
      this.databaseService.unMarkFavorite(this.postId).then(() => {
        this.alertify.presentToast('Unmarked as favorite');
      });
    }
  }
}
