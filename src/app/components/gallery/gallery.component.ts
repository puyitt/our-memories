import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Lightbox, LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent{
  activeTab: number = 0;
  imgList1_1: any;
  imgList1_2: any;
  imgList1_3: any;

  imgList2_1: any;
  imgList2_2: any;
  imgList2_3: any;

  imgList3_1: any;
  imgList3_2: any;
  imgList3_3: any;

  setActiveTab(index: number) {
    this.activeTab = index;
    if(index == 2) {
      this.renderer.addClass(document.body, 'third');
    }

    else {
      this.renderer.removeClass(document.body, 'third');
    }
  }

  constructor(
    private lightbox: Lightbox,
    private renderer: Renderer2,
    private lightboxEvent: LightboxEvent
  ) {

    this.imgList1_1 = [
      {
        src: '../../../assets/image/img1.jpg',
        caption: 'Sample Image'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      
    ]

    this.imgList1_2 = [
      {
        src: '../../../assets/image/img1.jpg',
        caption: 'Sample Image'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      
    ]

    this.imgList1_3 = [
      {
        src: '../../../assets/image/img1.jpg',
        caption: 'Sample Image'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      {
        src: '../../../assets/image/img1.jpg'
      },
      
    ]

    this.imgList2_1 = [
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      
    ]

    this.imgList2_2 = [
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      
    ]

    this.imgList2_3 = [
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      {
        src: '../../../assets/image/img2.jpg'
      },
      {
        src: '../../../assets/image/logo.png'
      },
      
    ]


    this.imgList3_1 = [
      {
        src: '../../../assets/image/folder3/Media1.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media2.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media3.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media4.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media5.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media6.jpg'
      },
    ]
    this.imgList3_2 = [
      {
        src: '../../../assets/image/folder3/Media7.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media8.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media9.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media10.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media11.jpg'
      },
    ]
    this.imgList3_3 = [
      {
        src: '../../../assets/image/folder3/Media12.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media13.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media14.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media15.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media16.jpg'
      },
      {
        src: '../../../assets/image/folder3/Media17.jpg'
      }
    ]
  }

  openLightbox(data:any, index: number): void {
   
    // this.renderer.addClass(document.body, 'new-class');
    this.lightbox.open(data, index,{disableScrolling: true,wrapAround: true});
  }

}
