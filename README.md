# Introduction

An opinionated structure for React-native component library including storybook that can run on both web and mobile platforms.

## Structure

```
root/
├─ core/ --including components
├─ docs/ --including stories
```

## Run

```bash
yarn android
yarn ios
yarn web
```

## Sync stories

On-device mode needs additional step to recognize story files

```bash
# update stories' path
yarn update-stories
# watch and auto sync
yarn watch-stories
```
