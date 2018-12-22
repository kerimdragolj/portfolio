import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HiremeComponent } from './components/hireme/hireme.component';
import { LetshavefunComponent } from './components/letshavefun/letshavefun.component';
import { MainComponent } from './components/main/main.component';
import { SkillsExperienceComponent } from './components/skills-experience/skills-experience.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: MainComponent,
        data: {
            route: 'home'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            route: 'about'
        }
    },
    {
        path: 'skills-experience',
        component: SkillsExperienceComponent,
        data: {
            route: 'skills'
        }
    },
    {
        path: 'lets-have-fun',
        component: LetshavefunComponent,
        data: {
            route: 'fun'
        }
    },
    {
        path: 'hireme',
        component: HiremeComponent,
        data: {
            route: 'hireme'
        }
    },
    {
        path: 'leave-feedback',
        component: FeedbackComponent,
        data: {
            route: 'feedback'
        }
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
